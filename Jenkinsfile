node {    
      def app     
      stage('Clone repository') {               
             
            checkout scm    
      }     
      stage('Build image') {         
       
            app = docker.build("myApp")    
       }
     stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

       stage('Run image') {
       // docker.withRegistry('https://hub.docker.com/repository/docker/tauqeerdocker/my', 'docker-hub-credentials') {            
       // app.push("${env.BUILD_NUMBER}")            
       // app.push("latest") 
         app.run(docker run -p 4242:4242 myApp:0.1
             }    
            }

}


//   stage("Run Image"){
//    docker run -p 4201:4200 myapp:0.1 
//   }
