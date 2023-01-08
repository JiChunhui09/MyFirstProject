const flag = true

function JsxConditionalRendering() {
    return (
        <>
            {flag ? 'react is useful' : 'vue is useful'}
            {flag ? <span> this is span</span> : null}
        </>
    )
}

export default JsxConditionalRendering