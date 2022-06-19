"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[6478],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5915:function(e,t,n){n.r(t),n.d(t,{default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l={unversionedId:"deployment/service-deployment",id:"deployment/service-deployment",isDocsHomePage:!1,title:"Service Deployment",description:"This section uses jenkins to demonstrate a simple service deployment to k8s.",source:"@site/docs/deployment/service-deployment.md",sourceDirName:"deployment",slug:"/deployment/service-deployment",permalink:"/docs/deployment/service-deployment",editUrl:"https://github.com/zeromicro/portal/edit/main/docs/deployment/service-deployment.md",version:"current",lastUpdatedAt:1655617431,formattedLastUpdatedAt:"6/19/2022",frontMatter:{},sidebar:"docs",previous:{title:"Log Collection",permalink:"/docs/deployment/log-collection"},next:{title:"Monitor",permalink:"/docs/deployment/service-monitor"}},p=[{value:"Prepare",id:"prepare",children:[]},{value:"Service deployment",id:"service-deployment",children:[{value:"1\u3001Relevant preparations for gitlab code warehouse",id:"1relevant-preparations-for-gitlab-code-warehouse",children:[]},{value:"2\u3001jenkins",id:"2jenkins",children:[]},{value:"port.sh",id:"portsh",children:[]}]},{value:"View pipeline",id:"view-pipeline",children:[]},{value:"View k8s service",id:"view-k8s-service",children:[]}],d={toc:p};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section uses jenkins to demonstrate a simple service deployment to k8s."),(0,r.kt)("h2",{id:"prepare"},"Prepare"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"k8s cluster installation"),(0,r.kt)("li",{parentName:"ul"},"gitlab environment installation"),(0,r.kt)("li",{parentName:"ul"},"jenkins environment installation"),(0,r.kt)("li",{parentName:"ul"},"redis&mysql&nginx&etcd installation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../goctl/installation"},"goctl install"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ensure that goctl is installed on each node of k8s"),(0,r.kt)("p",{parentName:"div"},"Please google for the installation of the above environment, and I will not introduce it here."))),(0,r.kt)("h2",{id:"service-deployment"},"Service deployment"),(0,r.kt)("h3",{id:"1relevant-preparations-for-gitlab-code-warehouse"},"1\u3001Relevant preparations for gitlab code warehouse"),(0,r.kt)("h4",{id:"11add-ssh-key"},"1.1\u3001Add SSH Key"),(0,r.kt)("p",null,"Enter gitlab, click on the user center, find ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings"),", find the ",(0,r.kt)("inlineCode",{parentName:"p"},"SSH Keys")," tab on the left\n",(0,r.kt)("img",{alt:"ssh key",src:n(1453).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\u3001View the public key on the machine where jenkins is located")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat ~/.ssh/id_rsa.pub\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2\u3001If not, you need to generate it, if it exists, please skip to step 3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t rsa -b 2048 -C "email@example.com"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Replace "',(0,r.kt)("a",{parentName:"p",href:"mailto:email@example.com"},"email@example.com"),'" with your own email',(0,r.kt)("br",{parentName:"p"}),"\n","After completing the generation, repeat the first step")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3\u3001Add the public key to gitlab")),(0,r.kt)("h4",{id:"12upload-the-code-to-the-gitlab-warehouse"},"1.2\u3001Upload the code to the gitlab warehouse"),(0,r.kt)("p",null,"Create a new project ",(0,r.kt)("inlineCode",{parentName:"p"},"go-zero-demo")," and upload the code. Details are not described here."),(0,r.kt)("h3",{id:"2jenkins"},"2\u3001jenkins"),(0,r.kt)("h4",{id:"21add-credentials"},"2.1\u3001Add credentials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View the private key of the machine where Jenkins is located, which corresponds to the previous gitlab public key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat id_rsa\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter jenkins, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Jenkins"),"-> ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Credentials"),"\n",(0,r.kt)("img",{alt:"credentials",src:n(9194).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Global Credentials")," page, add credentials, ",(0,r.kt)("inlineCode",{parentName:"p"},"Username")," is an identifier, add pipeline later, you know that this identifier represents the credentials of gitlab, and Private Key` is the private key obtained above\n",(0,r.kt)("img",{alt:"jenkins-add-credentials",src:n(3603).Z})))),(0,r.kt)("h4",{id:"22-add-global-variables"},"2.2\u3001 Add global variables"),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Jenkins"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Configure System"),", slide to the entry of ",(0,r.kt)("inlineCode",{parentName:"p"},"Global Properties"),", add docker private warehouse related information, as shown in the figure is ",(0,r.kt)("inlineCode",{parentName:"p"},"docker username"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker user password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"docker private warehouse address"),"\n",(0,r.kt)("img",{alt:"docker_server",src:n(9279).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_user")," your docker username"),(0,r.kt)("p",{parentName:"div"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_pass")," your docker user password"),(0,r.kt)("p",{parentName:"div"}," ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_server")," your docker server"),(0,r.kt)("p",{parentName:"div"}," The private warehouse I use here, if you don\u2019t use the private warehouse provided by the cloud vendor, you can build a private warehouse yourself. I won\u2019t go into details here, and you can google it yourself."))),(0,r.kt)("h4",{id:"23configure-git"},"2.3\u3001Configure git"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Jenkins"),"->",(0,r.kt)("inlineCode",{parentName:"p"},"Global Tool Configureation"),", find the Git entry, fill in the path of the git executable file of the machine where jenkins is located, if not, you need to download the Git plugin in the jenkins plugin management.\n",(0,r.kt)("img",{alt:"jenkins-git",src:n(4745).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jenkins-configure",src:n(4390).Z})),(0,r.kt)("h4",{id:"24-add-a-pipeline"},"2.4\u3001 Add a pipeline"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The pipeline is used to build the project, pull code from gitlab->generate Dockerfile->deploy to k8s are all done in this step, here is the demo environment, in order to ensure the smooth deployment process,\nNeed to install jenkins on the machine where one of the nodes of the k8s cluster is located, I installed it on the master here.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get the credential id Go to the credential page and find the credential id whose Username is ",(0,r.kt)("inlineCode",{parentName:"p"},"gitlab"),"\n",(0,r.kt)("img",{alt:"jenkins-credentials-id",src:n(7370).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to the jenkins homepage, click on ",(0,r.kt)("inlineCode",{parentName:"p"},"New Item"),", the name is ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),"\n",(0,r.kt)("img",{alt:"jenkins-add-item",src:n(6854).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"View project git address\n",(0,r.kt)("img",{alt:"gitlab-git-url",src:n(7964).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the service type Choice Parameter, check ",(0,r.kt)("inlineCode",{parentName:"p"},"This project is parameterized in General"),",\nClick ",(0,r.kt)("inlineCode",{parentName:"p"},"Add parameter")," and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Choice Parameter"),", add the selected value constant (api, rpc) and the variable (type) of the received value according to the figure, which will be used in the Pipeline script later.\n",(0,r.kt)("img",{alt:"jenkins-choice-parameter",src:n(8826).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", on the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," configuration page, swipe down to find ",(0,r.kt)("inlineCode",{parentName:"p"},"Pipeline script"),", fill in the script content"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"pipeline {\n  agent any\n  parameters {\n      gitParameter name: 'branch', \n      type: 'PT_BRANCH',\n      branchFilter: 'origin/(.*)',\n      defaultValue: 'master',\n      selectedValue: 'DEFAULT',\n      sortMode: 'ASCENDING_SMART',\n      description: 'Select the branch'\n  }\n\n  stages {\n      stage('service info')    {\n          steps {\n              sh 'echo branch: $branch'\n              sh 'echo build service type\uff1a${JOB_NAME}-$type'\n          }\n      }\n\n\n      stage('check out') {\n          steps {\n              checkout([$class: 'GitSCM', \n              branches: [[name: '$branch']],\n              doGenerateSubmoduleConfigurations: false, \n              extensions: [], \n              submoduleCfg: [],\n              userRemoteConfigs: [[credentialsId: '${credentialsId}', url: '${gitUrl}']]])\n          }   \n      }\n\n      stage('get commit_id') {\n          steps {\n              echo 'get commit_id'\n              git credentialsId: '${credentialsId}', url: '${gitUrl}'\n              script {\n                  env.commit_id = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()\n              }\n          }\n      }\n\n\n      stage('goctl version detection') {\n          steps{\n              sh '/usr/local/bin/goctl -v'\n          }\n      }\n\n      stage('Dockerfile Build') {\n          steps{\n                 sh '/usr/local/bin/goctl docker -go service/${JOB_NAME}/${type}/${JOB_NAME}.go'\n                 script{\n                     env.image = sh(returnStdout: true, script: 'echo ${JOB_NAME}-${type}:${commit_id}').trim()\n                 }\n                 sh 'echo image\uff1a${image}'\n                 sh 'docker build -t ${image} .'\n          }\n      }\n\n      stage('Upload to the mirror warehouse') {\n          steps{\n              sh '/root/dockerlogin.sh'\n              sh 'docker tag  ${image} ${dockerServer}/${image}'\n              sh 'docker push ${dockerServer}/${image}'\n          }\n      }\n\n      stage('Deploy to k8s') {\n          steps{\n              script{\n                  env.deployYaml = sh(returnStdout: true, script: 'echo ${JOB_NAME}-${type}-deploy.yaml').trim()\n                  env.port=sh(returnStdout: true, script: '/root/port.sh ${JOB_NAME}-${type}').trim()\n              }\n\n              sh 'echo ${port}'\n\n              sh 'rm -f ${deployYaml}'\n              sh '/usr/local/bin/goctl kube deploy -secret dockersecret -replicas 2 -nodePort 3${port} -requestCpu 200 -requestMem 50 -limitCpu 300 -limitMem 100 -name ${JOB_NAME}-${type} -namespace hey-go-zero -image ${dockerServer}/${image} -o ${deployYaml} -port ${port}'\n              sh '/usr/bin/kubectl apply -f ${deployYaml}'\n          }\n      }\n      \n      stage('Clean') {\n          steps{\n              sh 'docker rmi -f ${image}'\n              sh 'docker rmi -f ${dockerServer}/${image}'\n              cleanWs notFailBuild: true\n          }\n      }\n  }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"${credentialsId} should be replaced with your specific credential value, that is, a string of strings in the ","[Add Credentials]"," module, ${gitUrl} needs to be replaced with the git warehouse address of your code, other variables in the form of ${xxx} are not required Modify it and keep it as it is."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"user-pipepine-script",src:n(6083).Z})),(0,r.kt)("h3",{id:"portsh"},"port.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'case $1 in\n"user-api") echo 1000\n;;\n"user-rpc") echo 1001\n;;\n"course-api") echo 1002\n;;\n"course-rpc") echo 1003\n;;\n"selection-api") echo 1004\nesac\n')),(0,r.kt)("p",null,"The content of dockerlogin.sh"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\ndocker login --username=$docker-user --password=$docker-pass $docker-server\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$docker-user: docker login username"),(0,r.kt)("li",{parentName:"ul"},"$docker-pass: docker login user password"),(0,r.kt)("li",{parentName:"ul"},"$docker-server: docker private address")),(0,r.kt)("h2",{id:"view-pipeline"},"View pipeline"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build with parameters",src:n(7043).Z}),"\n",(0,r.kt)("img",{alt:"build with parameters",src:n(9253).Z})),(0,r.kt)("h2",{id:"view-k8s-service"},"View k8s service"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s01",src:n(7863).Z})),(0,r.kt)("h1",{id:"guess-you-wants"},"Guess you wants"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"k8s")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jenkins.io/zh/doc/book/installing/"},"jenkins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jenkins.io/zh/doc/pipeline/tour/hello-world/"},"jenkins pipeline")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/"},"nginx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etcd.io/docs/current/"},"etcd"))))}c.isMDXComponent=!0},9279:function(e,t,n){t.Z=n.p+"assets/images/docker_env-041478b5f3401eaa8984c63a0b0eb39d.png"},7964:function(e,t,n){t.Z=n.p+"assets/images/gitlab-git-url-f1da68812c259d6a79ae1d6d56dbcb2e.png"},3603:function(e,t,n){t.Z=n.p+"assets/images/jenkins-add-credentials-6571e3a1892342babe2aff11383cd4cf.png"},7043:function(e,t,n){t.Z=n.p+"assets/images/jenkins-build-with-parameters-8bce03ffd4bf1d31f548efe18b250129.png"},8826:function(e,t,n){t.Z=n.p+"assets/images/jenkins-choice-74208d911d8e87e8b3c334623f622b76.png"},4390:function(e,t,n){t.Z=n.p+"assets/images/jenkins-configure-67327d264092ef27617d7f04d1d4383a.png"},7370:function(e,t,n){t.Z=n.p+"assets/images/jenkins-credentials-id-375cada8d4e2bc0b9595ea1075115037.png"},9194:function(e,t,n){t.Z=n.p+"assets/images/jenkins-credentials-67c5d02d364de9ce359864a183f9dbb2.png"},4745:function(e,t,n){t.Z=n.p+"assets/images/jenkins-git-2704493865e8f639ed334c1db8ce48a9.png"},6854:function(e,t,n){t.Z=n.p+"assets/images/jenkins-new-item-c75773b46b1a19c8497bfa7e2ec44052.png"},7863:function(e,t,n){t.Z=n.p+"assets/images/k8s-01-620cb74196adbc0824b838c576d402ae.png"},9253:function(e,t,n){t.Z=n.p+"assets/images/pipeline-d580a601a6778ca75b488df27d2c8aed.png"},1453:function(e,t,n){t.Z=n.p+"assets/images/ssh-add-key-1fc91c396e8e927e4345207f6cfb1869.png"},6083:function(e,t,n){t.Z=n.p+"assets/images/user-pipeline-script-91472316747be2a8ca7fb809569909f5.png"}}]);