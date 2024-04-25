export default {
    onFinish: (values) => {
        console.log(values);
        fetch('../../../backend/src/index.php?action=1', {
            method: 'GET',
        }).then(res => res.json).then(data => {
            console.log(data)
        } )
        window.location = '/movimentacao';
    },
}
