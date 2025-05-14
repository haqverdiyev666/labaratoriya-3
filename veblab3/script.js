// Sayfa yükləndikdə "Haqqımda" bölməsi animasiyalı görünsün
window.onload = function () {
    const about = document.querySelector(".about");
    about.style.opacity = 0;
    about.style.transition = "opacity 2s";
    setTimeout(() => {
        about.style.opacity = 1;
    }, 500);
};

// Bacarıq əlavə etmək və redaktə funksionallığı
const skillsSection = document.querySelector(".skills ul");
const addSkillButton = document.createElement("button");
addSkillButton.textContent = "Yeni Bacarıq Əlavə Et";
addSkillButton.style.backgroundColor = "#1a5897";
addSkillButton.style.color = "white";
addSkillButton.style.border = "none";
addSkillButton.style.padding = "8px 12px";
addSkillButton.style.marginTop = "10px";
addSkillButton.style.cursor = "pointer";
addSkillButton.onclick = function () {
    const newSkill = prompt("Əlavə etmək istədiyiniz bacarığı yazın:");
    if (newSkill) {
        const li = document.createElement("li");
        li.textContent = newSkill;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Redaktə et";
        editBtn.style.marginLeft = "10px";
        editBtn.style.backgroundColor = "#1a5897";
        editBtn.style.color = "white";
        editBtn.style.border = "none";
        editBtn.style.padding = "4px 8px";
        editBtn.style.cursor = "pointer";
        editBtn.onclick = function () {
            const updatedSkill = prompt("Bacarığı dəyiş:", li.firstChild.textContent);
            if (updatedSkill) {
                li.firstChild.textContent = updatedSkill;
            }
        };

        li.appendChild(editBtn);
        skillsSection.appendChild(li);
    }
};
document.querySelector(".skills").appendChild(addSkillButton);

// İş təcrübəsi əlavə etmək funksiyası
document.addEventListener("DOMContentLoaded", function () {
    const workSection = document.querySelector(".work-experience");
    const addWorkBtn = document.createElement("button");
    addWorkBtn.textContent = "Yeni Təcrübə Əlavə Et";
    addWorkBtn.style.backgroundColor = "#1a5897";
    addWorkBtn.style.color = "white";
    addWorkBtn.style.border = "none";
    addWorkBtn.style.padding = "8px 12px";
    addWorkBtn.style.marginTop = "10px";
    addWorkBtn.style.cursor = "pointer";
    addWorkBtn.onclick = function () {
        const workTitle = prompt("Vəzifə və təşkilat:");
        const workYear = prompt("İl (məsələn 2024):");
        if (workTitle && workYear) {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${workTitle}</strong> (${workYear})`;
            workSection.appendChild(p);
        }
    };
    workSection.appendChild(addWorkBtn);
});

// Əlavə Xüsusiyyət: Dark Mode Toggle
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Qaranlıq Rejim";
darkModeBtn.style.margin = "20px 0";
darkModeBtn.style.backgroundColor = "#1a5897";
darkModeBtn.style.color = "white";
darkModeBtn.style.border = "none";
darkModeBtn.style.padding = "8px 12px";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".section, .header").forEach(el => {
        el.classList.toggle("dark-mode-section");
    });
};
document.querySelector(".container").prepend(darkModeBtn);
