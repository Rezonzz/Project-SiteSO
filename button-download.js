const button = document.querySelector(".button");
                    button.addEventListener("click", () =>{
                      button.classList.add("active");
                      setTimeout(()=>{
                        button.classList.remove("active");
                        button.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle")
                        button.querySelector("span").innerText = "Completed";
                        let download_href="./Windows-ISO-Downloader.exe";
                        window.location.href=download_href;
                      },2000);
                    });