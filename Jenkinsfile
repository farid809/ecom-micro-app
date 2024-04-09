#!/usr/bin/env groovy

node {
    stage('checkout') {
        checkout scm
    }

    stage('check java') {
        sh "java -version"
    }

    stage('clean') {
        sh "chmod +x gradlew"
        sh "./gradlew clean --no-daemon"
    }
    stage('nohttp') {
        sh "./gradlew checkstyleNohttp --no-daemon"
    }

    stage('npm install') {
        sh "./gradlew npm_install -PnodeInstall --no-daemon"
    }

    stage('packaging') {
        sh "./gradlew bootJar -x test -Pprod -PnodeInstall --no-daemon"
        archiveArtifacts artifacts: '**/build/libs/*.jar', fingerprint: true
    }


    def dockerImage
    stage('publish docker') {
        withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]){
    sh "docker logout"
    sh "echo ${env.dockerHubUser} "
 
        sh "./gradlew bootJar -Pprod jib -PnodeInstall   -PjibArchitecture=amd64 -Djib.to.auth.username=${env.dockerHubUser} -Djib.to.auth.password=${env.dockerHubPassword} -Djib.to.image=registry.hub.docker.com/farid809/store --no-daemon"
} 
   }

stage('Deploy to Kubernetes') {
        // Using the kubeconfig file securely
        withCredentials([file(credentialsId: 'my-kubeconfig', variable: 'KUBECONFIG_PATH')]) {
// Test command to list all Kubernetes namespaces
            sh "kubectl rollout restart deployment store -n ecom  --kubeconfig=${env.KUBECONFIG_PATH}"
        }
    }
}
