const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

const selectItem = id => {
    removeBorder();
    removeShow();
    const tabContentItem = document.querySelector(`#${id}-content`);
    tabContentItem.classList.add('show');
}

const removeShow = () => {
    tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

const removeBorder = () => {
    tabItems.forEach( item => {
        item.classList.remove('tab-border');
    })
}

const addBorder = element => {
    element.classList.add('tab-border');
}

tabItems.forEach(item => {
	item.addEventListener('click', function(){
        selectItem(this.id);
        addBorder(this);
    });
});



const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        answers[index].classList.toggle("show-answer");
    })
})