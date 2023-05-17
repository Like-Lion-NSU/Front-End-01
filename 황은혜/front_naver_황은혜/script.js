const $input=document.querySelector("#sign_up-pwd1")
const lock1=document.querySelector("#lock_1")
const block_1=document.querySelector("#PWD")
const text=document.createElement('p');
const $input2=document.querySelector("#sign_up-pwd2")
const lock2=document.querySelector("#lock_2")
const block_2=document.querySelector("#PWD2")
const text2=document.createElement('p');
const $input3=document.querySelector("#sign_up-id")
const block_3=document.querySelector(".id_box")
const text3=document.createElement('p');
const $input4=document.querySelector("#sign_up-name")
const block_4=document.querySelector(".name_box")
const text4=document.createElement('p');

function PWD_CHECK(event) {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    if (event.target.value.trim().length === 0 || event.type === "blur") {
        lock1.style.backgroundPosition = "25% 50%";
        text.textContent = '필수 정보입니다.';
        block_1.appendChild(text);
        text.style.color = "red";
        text.style.marginTop = "8px";
        text.style.fontSize = "12px";
    } else if (reg.test(event.target.value) === false) {
        lock1.style.backgroundPosition = "25% 50%";
        text.textContent = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
        block_1.appendChild(text);
        text.style.color = "red";
        text.style.marginTop = "8px";
        text.style.fontSize = "12px";
    } else {
        text.remove();
        lock1.style.backgroundPosition = "80% 0%";
    }
}

function PWD_CHECK2(event) {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    if (event.target.value.trim().length === 0 || event.type === "blur") {
        lock2.style.backgroundPosition = "25% 50%";
        text2.textContent = '필수 정보입니다.';
        block_2.appendChild(text2);
        text2.style.color = "red";
        text2.style.marginTop = "8px";
        text2.style.fontSize = "12px";
    } else if (reg.test(event.target.value) === false) {
        lock2.style.backgroundPosition = "25% 50%";
        text2.textContent = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
        block_2.appendChild(text2);
        text2.style.color = "red";
        text2.style.marginTop = "8px";
        text2.style.fontSize = "12px";
    } else {
        text2.remove();
        lock2.style.backgroundPosition = "80% 0%";
    }
}

function ID_CHECK(event) {
    let reg = /^[A-Za-z0-9_-]{5,20}$/;
    if (event.target.value.trim().length === 0 || event.type === "blur") {
        block_3.style.backgroundPosition = "25% 50%";
        text3.textContent = '필수 정보입니다.';
        block_3.appendChild(text3);
        text3.style.color = "red";
        text3.style.marginTop = "8px";
        text3.style.fontSize = "12px";
    } else if (reg.test(event.target.value) === false) {
        block_3.style.backgroundPosition = "25% 50%";
        text3.textContent = '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
        block_3.appendChild(text3);
        text3.style.color = "red";
        text3.style.marginTop = "8px";
        text3.style.fontSize = "12px";
    } else {
        text3.remove();
        block_3.style.backgroundPosition = "80% 0%";
    }
}

function NAME_CHECK(event) {
    let reg = /^[A-Za-z가-힣]+$/;
    if (event.target.value.trim().length === 0 || event.type === "blur") {
        block_4.style.backgroundPosition = "25% 50%";
        text4.textContent = '필수 정보입니다.';
        block_4.appendChild(text4);
        text4.style.color = "red";
        text4.style.marginTop = "8px";
        text4.style.fontSize = "12px";
    } else if (reg.test(event.target.value) === false) {
        block_4.style.backgroundPosition = "25% 50%";
        text4.textContent = '한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)';
        block_4.appendChild(text4);
        text4.style.color = "red";
        text4.style.marginTop = "8px";
        text4.style.fontSize = "12px";
    } else {
        text4.remove();
        block_4.style.backgroundPosition = "80% 0%";
    }
}

$input.addEventListener("change", PWD_CHECK);
$input2.addEventListener("change", PWD_CHECK2);
$input3.addEventListener("change", ID_CHECK);
$input4.addEventListener("change", NAME_CHECK);

const $input5 = document.querySelector("#sign_up-birthday");
const block_5 = document.querySelector(".birth_box");
const text5 = document.createElement('p');

function BIRTH_CHECK(event) {
    // 년도 입력란의 유효성 검사
    if (event.target.value.trim().length === 0 || event.type === "blur") {
        block_5.style.backgroundPosition = "25% 50%";
        text5.textContent = '태어난 년도 4자리를 정확하게 입력하세요.';
        block_5.appendChild(text5);
        text5.style.color = "red";
        text5.style.marginTop = "8px";
        text5.style.fontSize = "12px";
    } else if (event.target.value.trim().length !== 4) {
        block_5.style.backgroundPosition = "25% 50%";
        text5.textContent = '태어난 년도 4자리를 정확하게 입력하세요.';
        block_5.appendChild(text5);
        text5.style.color = "red";
        text5.style.marginTop = "8px";
        text5.style.fontSize = "12px";
    } else {
        text5.remove();
        block_5.style.backgroundPosition = "80% 0%";
    }
}

$input5.addEventListener("change", BIRTH_CHECK);

const $input6 = document.querySelector("#sign_up-email");
const block_6 = document.querySelector(".email_box");
const text6 = document.createElement('p');

function EMAIL_CHECK(event) {
    const email = event.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0 || event.type === "blur") {
        block_6.style.backgroundPosition = "25% 50%";
        text6.textContent = '이메일 주소를 다시 확인해주세요.';
        block_6.appendChild(text6);
        text6.style.color = "red";
        text6.style.marginTop = "8px";
        text6.style.fontSize = "12px";
    } else if (!emailRegex.test(email)) {
        block_6.style.backgroundPosition = "25% 50%";
        text6.textContent = '이메일 주소를 다시 확인해주세요.';
        block_6.appendChild(text6);
        text6.style.color = "red";
        text6.style.marginTop = "8px";
        text6.style.fontSize = "12px";
    } else {
        text6.remove();
        block_6.style.backgroundPosition = "80% 0%";
    }
}

$input6.addEventListener("change", EMAIL_CHECK);

const $input7 = document.querySelector("#input_number");
const block_7 = document.querySelector(".number_box3");
const text7 = document.createElement('p');

function PHONE_CHECK(event) {
    const phoneNumber = event.target.value.trim();
    const phoneNumberRegex = /^\d{9,16}$/;

    if (phoneNumber.length === 0 || event.type === "blur") {
        block_7.style.backgroundPosition = "25% 50%";
        text7.textContent = '필수 정보입니다.';
        block_7.appendChild(text7);
        text7.style.color = "red";
        text7.style.marginTop = "8px";
        text7.style.fontSize = "12px";
    } else if (!phoneNumberRegex.test(phoneNumber)) {
        block_7.style.backgroundPosition = "25% 50%";
        text7.textContent = '형식에 맞지 않는 번호입니다.';
        block_7.appendChild(text7);
        text7.style.color = "red";
        text7.style.marginTop = "8px";
        text7.style.fontSize = "12px";
    } else {
        text7.remove();
        block_7.style.backgroundPosition = "80% 0%";
    }
}

$input7.addEventListener("change", PHONE_CHECK);
