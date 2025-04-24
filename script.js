document.addEventListener("DOMContentLoaded", function(){
    const generateButton = document.querySelector("#generate-btn");
    const saveButton = document.querySelector("#save-btn");
    const qrCodeContainer = document.querySelector("#qr-code");

    let qrCodeInstance = null;

    generateButton.addEventListener("click", ()=>{
        const qrText = document.querySelector(".qr").value;

        if(qrCodeInstance !== null){
            qrCodeInstance.clear();
            qrCodeInstance = null;
            qrCodeContainer.innerHTML = "";
        }
        
        if(qrText !== null){
            qrCodeInstance = new QRCode(qrCodeContainer,{ 
                text: qrText,
                width: 128,
                height: 128,
            });
                
            qrCodeContainer.style.opacity="1";
            qrCodeContainer.style.transform = "scale(1)";        
        }
    });

    saveButton.addEventListener("click", ()=>{

        if(qrCodeInstance !== null){
            const qrImageData = qrCodeInstance._el
            .querySelector("img")
            .getAttribute("src");
            
            const link = document.createElement("a");
            link.href = qrImageData;
            link.download = "qr-code.png";
            link.click();
        }

    });

});

