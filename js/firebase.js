import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBhPyCAAYSQKSUfCRjtDTBVJbgoFeuUk0A",
    authDomain: "portfolio-9591d.firebaseapp.com",
    projectId: "portfolio-9591d",
    storageBucket: "portfolio-9591d.appspot.com",
    messagingSenderId: "789446412575",
    appId: "1:789446412575:web:2714b3bc4f0108cd26482a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener los IDs de los proyectos en el orden definido
async function getOrder() {
    const orderDoc = doc(db, "order", "default");
    const orderSnapshot = await getDoc(orderDoc);
    const orderData = orderSnapshot.data();
    return orderData ? orderData.projectOrder : [];
}

// Función para obtener los datos de los proyectos
async function getProjects() {
    const projects = collection(db, 'projects');
    const querySnapshot = await getDocs(projects);
    const portfolio = [];
    querySnapshot.forEach((doc) => {
    portfolio.push({ id: doc.id, ...doc.data() });
    });
    return portfolio;
}

// Función principal para mostrar los proyectos en el orden correcto
async function displayProjects() {
    const projectOrder = await getOrder();
    const allProjects = await getProjects();

    const orderedProjects = [];
    for (const [projectId, order] of Object.entries(projectOrder)) {
        const project = allProjects.find((p) => p.id === projectId);
        if (project) {
            orderedProjects[order] = project;
        }
    }

    const portfolioDiv = document.querySelector(".gallery");
    portfolioDiv.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos elementos

    orderedProjects.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.setAttribute("data-id", item.category);
        div.innerHTML = `
            <div class="inner">
                <img src="${item.img}" alt="${item.category}" height="258px" width="464px"/>
                <div class="overlay">
                <span class="fa fa-external-link" onClick="${item.link != null ? `window.open('${item.link}', '_blank')` : ''}"></span>
                <h4>${item.title}</h4>
                </div>
            </div>
            `;
    portfolioDiv.appendChild(div);
    });

    const script = document.createElement('script');
    script.src = './js/app.js';
    script.type = 'module';
    document.body.appendChild(script);
}

// Función para agregar el enlace al CV
async function appendCvUrl() {
    const cvDoc = collection(db, "cv");
    const querySnapshot = await getDocs(cvDoc);
    querySnapshot.forEach((doc) => {
        const cvData = doc.data();
        if (cvData.url) {
            const cvLink = document.querySelector(".cv-link");
            cvLink.href = cvData.url;
        }
    });
}

// Llamar a la función principal
displayProjects().catch(console.error);
appendCvUrl().catch(console.error);