# Comandos Creados en Angular

        ng g c pages/forms/inicia

            CREATE src/app/pages/forms/inicia/inicia.component.scss (0 bytes)
            CREATE src/app/pages/forms/inicia/inicia.component.html (21 bytes)
            CREATE src/app/pages/forms/inicia/inicia.component.spec.ts (628 bytes)
            CREATE src/app/pages/forms/inicia/inicia.component.ts (272 bytes)
            UPDATE src/app/pages/forms/forms.module.ts (578 bytes)


        ng g c pages/forms/buttons

            CREATE src/app/pages/forms/buttons/buttons.component.scss (0 bytes)
            CREATE src/app/pages/forms/buttons/buttons.component.html (26 bytes)
            CREATE src/app/pages/forms/buttons/buttons.component.spec.ts (635 bytes)
            CREATE src/app/pages/forms/buttons/buttons.component.ts (270 bytes)

         ╰─$ ng g m pages/forms  --routing 
            CREATE src/app/pages/forms/forms-routing.module.ts (248 bytes)
            CREATE src/app/pages/forms/forms.module.ts (275 bytes)


        ╰─$ ng g c pages/forms/busca
        CREATE src/app/pages/forms/busca/busca.component.scss (0 bytes)
        CREATE src/app/pages/forms/busca/busca.component.html (24 bytes)
        CREATE src/app/pages/forms/busca/busca.component.spec.ts (621 bytes)
        CREATE src/app/pages/forms/busca/busca.component.ts (262 bytes)
        UPDATE src/app/pages/forms/forms.module.ts (864 bytes)

        ╰─$ ng g c pages/forms/sube 
        CREATE src/app/pages/forms/sube/sube.component.scss (0 bytes)
        CREATE src/app/pages/forms/sube/sube.component.html (23 bytes)
        CREATE src/app/pages/forms/sube/sube.component.spec.ts (614 bytes)
        CREATE src/app/pages/forms/sube/sube.component.ts (258 bytes)
        UPDATE src/app/pages/forms/forms.module.ts (938 bytes)

        ╰─$ ng g c pages/forms/analiza 
        CREATE src/app/pages/forms/analiza/analiza.component.scss (0 bytes)
        CREATE src/app/pages/forms/analiza/analiza.component.html (26 bytes)
        CREATE src/app/pages/forms/analiza/analiza.component.spec.ts (635 bytes)
        CREATE src/app/pages/forms/analiza/analiza.component.ts (270

# Docker Image Build

    ╰─$  docker build -t pabloeze/codestory-app:1.0 .
            Sending build context to Docker daemon  82.24MB
            Step 1/13 : FROM node:10.16.0 as build
            10.16.0: Pulling from library/node
            a4d8138d0f6b: Pull complete
            dbdc36973392: Pull complete
            f59d6d019dd5: Pull complete
            aaef3e026258: Pull complete
            6e454d3b6c28: Pull complete
            
            ... 

            (1/2) Installing lua5.3-libs (5.3.5-r2)
            (2/2) Installing vim (8.1.1365-r0)
            Executing busybox-1.29.3-r10.trigger
            OK: 56 MiB in 44 packages
            Removing intermediate container 4c9670b76d20
            ---> b9f612126ab0
            Step 11/13 : COPY --from=build /app/dist /usr/share/nginx/html
            ---> dfe62c4afbc0
            Step 12/13 : EXPOSE 80
            ---> Running in 50bf5d7e25c6
            Removing intermediate container 50bf5d7e25c6
            ---> 48b5f4ce3449
            Step 13/13 : CMD ["nginx", "-g", "daemon off;"]
            ---> Running in 08227d0c83b2
            Removing intermediate container 08227d0c83b2
            ---> d5769f8a3fde
            Successfully built d5769f8a3fde
            Successfully tagged pabloin/codestory-app:1.0

        https://hub.docker.com/u/pabloeze/          

        ╰─$ cat /tmp/pabloeze_pwd | docker login --username pabloeze --password-stdin

        ╰─$ docker push pabloeze/codestory-app:1.0
            The push refers to repository [docker.io/pabloeze/codestory-app]
            aa1528ca4bf3: Pushed
            18c5590c7bff: Pushed
            2bdf88b2699d: Mounted from glaciar/glaciar.org-front
            f1b5933fe4b5: Mounted from pabloeze/techu-backend
            1.0: digest: sha256:034deef4048acf9f7b81ae9d0e1fa6421206fee846a220c4b783edf950d72696 size: 1163

        ╰─$ docker run -d  -p 80:80 pabloeze/codestory-app:1.0

            And, Happy running!

        -------------
        Desde Kubernetes
 
            kubectl apply -f codestory-cloud-v3.yml
            kubectl apply -f codestory-cloud-service-v1.yml
            kubectl run -it --rm --restart=Never alpine --image=alpine sh
                / # apk add curl
                / # curl -k http://my-cluster-service:4500


# Imágens Gratis
    https://www.pexels.com/es-es/foto/ciudad-paisaje-punto-de-referencia-calle-3254729/
    https://www.pexels.com/es-es/foto/antiguo-arquitectura-arquitectura-historica-calle-415980/
    https://www.pexels.com/es-es/foto/arquitectura-centrico-centro-de-la-ciudad-cielo-670261/
    https://unsplash.com/photos/Krv7O6Uy5r8

# Imagenes Gratis Utilizadas

    00 Inicia
    Perito Moreno
    I, Luca Galuzzi - CC BY-SA 2.5
    https://es.wikipedia.org/wiki/Glaciar_Perito_Moreno#/media/Archivo:Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG


    01 Busca
    https://www.pexels.com/photo/garden-madrid-puerta-de-alcala-spain-605158/

    02 Sube
    https://www.pexels.com/es-es/foto/al-aire-libre-arquitectura-autopista-camara-rapida-2954606/

    03 Analiza
    https://www.pexels.com/es-es/foto/agua-al-aire-libre-amanecer-anochecer-2440984/


# GitHub Actions

    WIP with Medium 
    HUSKY_SKIP_HOOKS=true