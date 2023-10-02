document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() =>{
        document.querySelector("#load-inframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.834039083619!2d-74.17094212587659!3d4.623681142322227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e872bf1ca1f%3A0x9b14f81cab5043e7!2sCra.%2081a%20%2343-63%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1693518709686!5m2!1ses!2sco"></iframe>
    `;
    }, 700)
    
});