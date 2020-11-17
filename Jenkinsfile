pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ricardolimachen81/frisby.git'
      }
    }
    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }      
  }
}