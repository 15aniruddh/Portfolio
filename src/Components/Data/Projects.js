import PdfQaImg from "../../Pics/Pdf-QA.webp";
import LifeCarePortalImg from "../../Pics/LifeCare-Portal.webp";
import RecipeBookImg from "../../Pics/Recipe-Book.webp";

export const ProjectData =[
    {
        id: 1,
        title:"PDF Q&A",
        about:"PDF Q&A is a retrieval-augmented generation app that answers questions about documents you upload, with sources cited.",
        tags:["Python","React.js","RAG","AI (Gemini LLM Model)","Embedding", "Vector Database (Qdrant)"],
        github:"https://github.com/15aniruddh/my_rag_app",
        live:"https://rag-app.15aniruddh.co.in",
        isLive:true,
        image:PdfQaImg,
        gitlab:"",

    },
    {
        id: 2,
        title:"LifeCare Portal",
        about:"LifeCare Portal simplifies hospital management and operations, inspired by the challenges of the recent pandemic. It provides easy access to crucial information like oxygen and bed availability and helps users find nearby hospitals efficiently, saving time and improving access to healthcare facilities.",
        tags:["React.js","HTML5","CSS","JavaScript","Python","FastAPI","OAuth","AWS S3","AWS Lambda","AWS CloudFront","Domain","SQL","Bootstrap","Docker"],
        github:"https://github.com/15aniruddh/LifeCare-Portal",
        live:"https://lifecare-portal.15aniruddh.co.in",
        isLive:true,
        image:LifeCarePortalImg,
        gitlab:"https://gitlab.com/15aniruddh/lifecare-portal/-/tree/master",

    },
    {
        id: 3,
        title:"Recipe Book",
        about:"Recipe Book is a dynamic application built with Angular 2 and Firebase. It lets users create, view, and share recipes, with real-time updates ensuring seamless collaboration and instant synchronization of changes.",
        tags:["Angular2.js","HTML5","CSS","TypeScript","Firebase","OAuth","Bootstrap"],
        github:"https://github.com/15aniruddh/Recipe_Book",
        live:"https://recipe.15aniruddh.co.in",
        image:RecipeBookImg,
        gitlab:"",

    }
]
