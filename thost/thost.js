export const thost = (thostData) => {
    const write = {
        message: thostData
    }

    const thostComponent = `<div id='thethost' class="thostjs">
        <div class="data">
            <p>${write.message}</p>
        </div>
    </div>`

    setTimeout(() => {
        document.getElementById('thethost').classList.add('thosefadeout');
    }, 5000)

    document.querySelector('body').innerHTML += thostComponent
}

