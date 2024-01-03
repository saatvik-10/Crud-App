      let btn = document.getElementById("click");
      let parentList = document.getElementById("parentList");

      function addChapter(_event) {
        if (parentList.children[0].className == "emptyMsg") {
          parentList.children[0].remove();
        }
        let currentBtn = _event.currentTarget;
        let currentInput = currentBtn.previousElementSibling;
        let currentChapterName = currentInput.value;

        let newLi = document.createElement("li");
        newLi.className = "list-group-item d-flex justify-content-between";
        newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3>
                <button class="btn btn-warning mx-2" onclick='editChapter(this)'>Edit</button>
                <button class="btn btn-danger" onclick='removeChapter(this)'>Remove</button>`;
                console.log(parentList.children)
        
        parentList.appendChild(newLi)
        
        parentList.append(newLi);
      }

      click.addEventListener("click", addChapter);
      function removeChapter(currentChapter) {
        currentChapter.parentElement.remove();
        let parentList = document.getElementById("parentList");

        if (parentList.children.length == 0) {
          let newMsg = document.createElement("h4");
          newMsg.classList.add("emptyMsg");
          newMsg.textContent = "No Chapters Found!";
          parentList.appendChild(newMsg);
        }
      }

      function editChapter(currentChapter) {
        // console.log('editing')
        if (currentChapter.textContent == "Done") {
          currentChapter.textContent = "Edit";
          let currChapterName = currentChapter.previousElementSibling.value;
          let currHeading = document.createElement("h3");
          currHeading.className = "flex-grow-1";
          currHeading.textContent = currChapterName;
          currentChapter.parentElement.replaceChild(
            currHeading,
            currentChapter.previousElementSibling
          );
        } else {
          currentChapter.textContent = "Done";
          let currChapterName =
            currentChapter.previousElementSibling.textContent;
          let currInput = document.createElement("input");
          currInput.type = "text";
          currInput.placeholder = "Chapter Name";
          currInput.class = "form-control";
          currInput.value = currChapterName;

          currentChapter.parentElement.replaceChild(
            currInput,
            currentChapter.previousElementSibling
          );
        }
      }

