# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# https://github.com/halduchaur/aarambh-services/




docker pull image_name (pull docker image from locally or docker hub)
docker images (to check all local docker images)
docker run image_name (to create an docker container from specific image)
docker run -it image_name (to pull and create an docker container from specific image and attach an interactive terminal with it)
exit (exit from an docker container)
docker ps -a (to check all containers)
docker ps (to check running containers)
docker start container_id (to start an docker container by its id)
docker stop container_id (to stop an docker container by its id)
docker rmi image_id (to remove an docker image by its id)
docker rm container_id (to remove an docker container by its id)
docker pull image_name:version_no (to pull an specific version docker image)
docker run -d -e MYSQL_ROOT_PASSWORD=root mysql:8.0 (create docker container with mysql version_no in detach mode with environment variable)
docker run -p host_port:container_port image_name (create an container and map host_port to container_port)
docker logs container_id (to check container logs)
docker network (if we need to communicate one container to another container, then we need to create docker network & both container should create inside network)
docker network ls (to check all network)
docker network create mongo-network (to create docker network)
docker network rm mongo-network (to delete docker network)
docker run -d -p27017:27017 --name mongo --network mongo-network -e MONGO_INITDB_ROOT_USERNAME=admin mongo (pull & create an container with detach  mode, port mapping, defalt container name, inside network, environment variables, image name)
docker compose (to create containers we will create an .yaml file which hold info regarding newly containers, no need to mention docker network, when docker compose will run this file will create an auto docker network for defined containers)
docker compose -f file_name up -d (will create defined containers from file with an default docker network)
docker compose -f file_name down (will delete all defined containers with default docker network)

create an docker file(Dockerfile) to dockerize our app
docker build -t image_name . (to make app image)
docker build -t aarambh_services_image . (after creating docker file, go to file location & run command to create docker image)
docker run -p 5173:5173 aarambh_services_image (after successful image, run docker container, visit to http://localhost:5173)
create an docker hub account and create repository, then image name should be repository name
docker build -t e3dfsdfs/aarambh-services . (create image, as same as repository name)
docker push e3dfsdfs/aarambh-services (push local docker image to docker hub repository)

docker pull e3dfsdfs/aarambh-services:latest (pull docker image from remote docker hub)
docker run -p 5173:5173 e3dfsdfs/aarambh-services:latest (run docker container)

inside Dockerfile all commands rest (CMD) will execute during creating image, CMD command will execute during run container.





//////////////////////////////////////////////////////////// 


Kafka क्या होता है?
Apache Kafka एक distributed event streaming platform है, जिसका उपयोग अलग-अलग applications/services के बीच messages/events को reliably भेजने और process करने के लिए किया जाता है।

1. Producer
Producer message/event भेजता है।
आपके Laravel application में:
Kafka::publish(config('kafka.brokers'))
    ->onTopic('order-events')
    ->withMessage($message)
    ->send();
यहाँ Laravel आपका Producer है।
यह Kafka को message भेज रहा है:
{
    "event": "order.created",
    "order_id": 1010,
    "amount": 5010
}


2. Topic
Topic एक तरह की category/channel है।
आपके project में:
order-events
payment-events



3. Partition
Topic के अंदर Kafka data को partitions में रखता है।
order-events

P0 → messages
P1 → messages
P2 → messages
Partition Kafka में parallel processing के लिए बहुत important है।



4. Broker
Broker Kafka का server होता है।
आपके Ubuntu machine पर:
localhost:9092
पर Kafka broker चल रहा है।
जब Laravel यह करता है:
->withBrokers('localhost:9092')
तो Laravel Kafka broker से connect कर रहा है।



5. Consumer
Consumer Kafka से messages पढ़ता है।
आपका Laravel command:
php artisan kafka:consume-orders
एक Kafka Consumer है।
यह message receive करके process कर रहा है।




6. Offset
Kafka में हर partition में messages की position होती है।
Partition 0

Offset 0 → Order 101
Offset 1 → Order 102
Offset 2 → Order 103
Offset 3 → Order 104

Consumer जब offset 2 तक पढ़ चुका है, तो उसे पता है कि वह कहाँ तक process कर चुका है।
इसीलिए Kafka में offset बहुत important है।

So, offset hamara logical handle hona chahiye, like hamari ek service down hai but consumer ne message process kar diya & commit bhi. so jab service up hogi then consumer us message ko again pick nahi karega bcz hamara message pehle commit ho chuka tha & commit or non commit par Kafka offset update karta hai. so kafka committd message ko pick nahi karta. so offset is very important.

So, jab bhi hamara topic -> message pick hoga & jab tak assign service apna kaam complete nahi kar leti hum message commit nahi karenge. service work complete success hone ke bad hi commit karenge. agar servic down hui ya service me koi error aaya so hum commit nahi karenge jisse kafka us message ko again pick karega & retry karega.
Hum ek cheez aur kar sakte hai, jab bhi hamara message pick hoga hum ek flag maintain kar sakte hai service ke sath ki this kafka message complete process ho gya hai, agar kafka this message ko again retry bhi karta hai to hum use service me process nahi karenge.



7. Consumer Group
order-events

P0 ───────> Consumer 1
P1 ───────> Consumer 2
P2 ───────> Consumer 3
अगर ये तीनों same consumer group में हैं, Kafka partitions को इनके बीच distribute कर सकता है।
इससे processing parallel हो सकती है।
इसलिए Kafka में parallelism की fundamental unit partition है।

Consumer Group = consumers ki ek team jo milkar Kafka topic ke messages/processes ko handle karti hai.
Kafka Topic: order-events

        order-events
             |
       +-----+-----+
       |           |
   Consumer 1   Consumer 2
       |           |
       +-----+-----+
             |
       order-group

Yahan:

Consumer 1 = ek consumer instance
Consumer 2 = doosra consumer instance
order-group = Consumer Group(with 'order-group' group ID)

Dono consumers same group ke members hain.
Same Consumer Group ke andar ek partition ko ek time par ek hi consumer process karta hai.
Kafka consumer ko batana padta hai ki woh kis group ka member hai.
->withConsumerGroupId('order-group')

Consumer ko terminal1 par run karenge to 1 instance, terminal2 par run kare to 2 instance. multiple consumer instance jinka group id same ho, wo ek consumer group ke andar aate hai, agar terminal3 par run karenge with different group id then its another consumer group. so consumer groups group id se create hote hai.
Same consumer ko jitne bhi terminal par run karenge, utne consumer instance banenge.
Lets say, mere pass 3 partitions hai ek topic ke, but mere pass ab 3 scenario bante hai.
3 partition with 1 consumer instance(single consumer will receive/handle/run all 3 partition messages)
3 partition with 3 consumer instance(each consumer will receive/handle/run single partition)
3 partition with 5 consumer instance(3 consumer will assign to 3 partition & 2 instance will be idle)

Lets say, mere pass 3 partition hai jinko process karna hai, aur 2 consumer group hai, ek group me 2 consumer instance(c1,c2) and next group me 1 consumer instance(c3) hai.
Now, same message c1 run karega & same message ko c3 bhi run kar sakta hai. as it is same message c2 run karega & same message ko c3 bhi run kar sakta hai. but same message jisko c1 run karega, usko c2 run nahi kar sakta i.e vice-versa(bcz all 3 partitions ko Kafka c1,c2 consumer me distribute karta hai)