const buttonConverter = document.getElementById('buttonConvert')
const inputDecimal = document.getElementById('inputDecimal')

buttonConverter.onclick = () => {
    if(
        (inputDecimal.value.includes(0) || 
        inputDecimal.value.includes(1)) &&
        inputDecimal.value.length % 8 === 0
    ) {
        const value = inputDecimal.value.trim()

        const binary = value.match(/.{1,8}/g)

        document.write(binary.map(value => parseInt(value, 2)))
    } else {
        alert('Digite um binário válido')
        inputDecimal.value = ''
    }
}