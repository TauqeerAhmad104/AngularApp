// node {    
//       def app     
//       stage('Clone repository') {               
             
//             checkout scm    
//       }     
//       stage('Build image') {         
       
//             app = docker.build("tauqeerdocker/appangular")    
//        }     
         
//        stage('Push image') {
//                                                   docker.withRegistry('https://registry.hub.docker.com', 'git') {            
//        app.push("${env.BUILD_NUMBER}")            
//        app.push("latest")        
//               }    
//            }
//         }