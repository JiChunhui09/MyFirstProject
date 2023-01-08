const songs = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Mood' },
    { id: 3, name: 'Stay' }
]

function JsxListRendering() {
    return (
        <div>
            <ul>
                {
                    songs.map(songs => <li>{songs.name}</li>)
                }
            </ul>
        </div>
    )
}

export default JsxListRendering;
