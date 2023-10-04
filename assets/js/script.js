const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
volume = wrapper.querySelector(".word i"),
infotext = wrapper.querySelector(".info-text"),
synonyms= wrapper.querySelector(".synonmys .list"),
removeIcon= wrapper.querySelector(".search span");
let audio;

function data(result, word){
    if(result.title){
        infotext.innerHTML = `Can't find the meaning of <span>"${word}"</span>.please, try to search for another word.`;
    }else{
        wrapper.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0],
        phontetics = `${result[0].meanings[0].partOfSpeech} /${result[0].phontetics[0].text}/`;
        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phontetics;
        document.querySelector(".meaning span").innerText = definitions.definitions;
        document.querySelector(".example span").innerText = definitions.example
        audio = new Audio(result[0].phontetics[0].audio);
        if(definitions.synonyms[0] == undefined){
        synonyms.parentElement.style.display = "none";
        }else{
            synonyms.parentElement.style.display = "block";
            synonyms.innerHTML = "";
            for (let i = 0; i < 5; i++) {
                let tag = `<span onclick="search ('${definitions.synonyms[i]}')">${definitions.synonyms[i]},</span>`;
                tag = i == 4 ? tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span>` : tag;
                synonyms.insertAdjacentHTML("beforeend", tag);
                console(synonyms)
            }
        }
    }
}

