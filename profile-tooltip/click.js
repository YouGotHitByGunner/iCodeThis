window.onload = () => {
    let state = false;

    const onAvatarClicked = () => {
        state = !state
        document.getElementById('text').style.display = state ? 'none' : 'flex'

        document.getElementById('arrow-down').style.display = state ? 'none' : 'flex'
    }

    document.getElementById("avatar").addEventListener("click", onAvatarClicked)
}