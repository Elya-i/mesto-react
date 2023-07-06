node {
    stage('Очистка Workspace') {
        cleanWs()
    }

    stage('Checkout SCM') {
        checkout scmGit(
            branches: [[name: 'main']],
            userRemoteConfigs: [[url: 'https://github.com/Elya-i/mesto-react.git']])
    }

    stage('Сборка дистрибутива') {
        nodejs(nodeJSInstallationName: 'NodeJS 16.20.1') {
            withEnv(["PUBLIC_URL=./"]) {
              sh 'npm i && npm run build'
            }
        }
    }

    stage('Сборка Docker образа') {

    }
}
