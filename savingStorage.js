
        function firstChoice() {

           return submit.addEventListener("click", function() {

            if(q1a1.checked) {
                localStorage.setItem('Answer1', lbl1.innerHTML)
            }
            else if (q1a2.checked) {
                localStorage.setItem('Answer1', lbl2.innerHTML)
            }           
            else if (q1a3.checked) {
                    localStorage.setItem('Answer1', lbl3.innerHTML)
            }
            else if (q1a4.checked) {
                localStorage.setItem('Answer1', lbl4.innerHTML)
            }
            });
            }

        function secondChoice() {

            return submit.addEventListener("click", function() {

            if(q2a1.checked) {
                    localStorage.setItem('Answer2', lbl5.innerHTML)
            }
            else if (q2a2.checked) {
                    localStorage.setItem('Answer2', lbl6.innerHTML)
            }           
            else if (q2a3.checked) {
                        localStorage.setItem('Answer2', lbl7.innerHTML)
            }
             else if (q2a4.checked) {
                    localStorage.setItem('Answer2', lbl8.innerHTML)
            }
            });
        }

        function thirdChoice() {

            return submit.addEventListener("click", function() {

            if (q3a1.checked) {
                localStorage.setItem('Answer3', lbl9.innerHTML)
            }
            else if (q3a2.checked) {
                localStorage.setItem('Answer3', lbl10.innerHTML)
            }
            else if (q3a3.checked) {
                localStorage.setItem('Answer3', lbl11.innerHTML)
            }
            else if (q3a4.checked) {
                localStorage.setItem('Answer3', lbl12.innerHTML)
            }
            });
        }


        function fourthChoice() {

            return submit.addEventListener("click", function() {

            if (q4a1.checked) {
                localStorage.setItem('Answer4', lbl13.innerHTML)
            }
            else if (q4a2.checked) {
                localStorage.setItem('Answer4', lbl14.innerHTML)
            }
            else if (q4a3.checked) {
                localStorage.setItem('Answer4', lbl15.innerHTML)
            }
            else if (q4a4.checked) {
                localStorage.setItem('Answer4', lbl16.innerHTML)
            }
            });
        }