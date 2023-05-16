function getValue(val)
{
    document.getElementById('result').value += val;
}

function getResult()
{
    document.getElementById('result').value = eval(document.getElementById('result').value);
}

function removeValue()
{
    var s = document.getElementById('result').value;
    var res = document.getElementById('result').value.slice(0, s.length - 1);
    document.getElementById('result').value=res

}
function allClear()
{
    document.getElementById('result').value ='';
}
function square(sq)
{
    document.getElementById('result').value =Math.pow(sq,2)
}