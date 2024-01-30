"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[352],{269:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=a(5893),r=a(1151);const s={},t="Instalaci\xf3n del Facturador",c={id:"instalador/linux-gestion-ssl",title:"Instalaci\xf3n del Facturador",description:"Descripci\xf3n",source:"@site/docs/instalador/linux-gestion-ssl.md",sourceDirName:"instalador",slug:"/instalador/linux-gestion-ssl",permalink:"/docu/docs/instalador/linux-gestion-ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/instalador/linux-gestion-ssl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manual para Script de Instalaci\xf3n",permalink:"/docu/docs/instalador/docker"},next:{title:"Manual de Instalaci\xf3n",permalink:"/docu/docs/instalador/valet-linux"}},l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Pasos",id:"pasos",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"instalaci\xf3n-del-facturador",children:"Instalaci\xf3n del Facturador"}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Este tutorial simplifica la instalaci\xf3n en Linux, destacando la opci\xf3n de omitir SSL inicialmente. Los pasos incluyen la edici\xf3n de par\xe1metros en un archivo, la limpieza de cach\xe9, y la advertencia sobre la necesidad de configurar SSL para el acceso completo. Una gu\xeda pr\xe1ctica y directa para usuarios de Ubuntu 18+."}),"\n",(0,i.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Para instalar debe ejecutar el script evitando instalar el SSL, le ser\xe1 consultado en el proceso y deber\xe1 ingresar "n"'}),"\n",(0,i.jsx)(n.li,{children:"Finalizada la instalaci\xf3n debe dirigirse a la ruta de instalaci\xf3n"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd /root/facturadorpro31/\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"debe editar el archivo .env"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nano .env\n"})}),"\n",(0,i.jsx)(n.p,{children:"dentro del editor ubicar los par\xe1metros y cambiarlos"}),"\n",(0,i.jsx)(n.p,{children:"Antes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"APP_URL=https://${APP_URL_BASE}\r\nFORCE_HTTPS=false\n"})}),"\n",(0,i.jsx)(n.p,{children:"Despu\xe9s:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"APP_URL=http://${APP_URL_BASE}\r\nFORCE_HTTPS=true\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Una vez finalizado, guarde y salga del editor"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"php artisan config:Cache\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Con eso habr\xe1 completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>t});var i=a(7294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);