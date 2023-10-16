document.addEventListener("DOMContentLoaded",
    function(e){
        let name1 = document.querySelector(".name1")
        let submit = document.querySelector(".submit")
        let namehere = document.querySelector(".namehere")

        submit.addEventListener("click",
            function(e){
                namehere.textContent = name1.value
                name1 = null
            }
        )
    }
)