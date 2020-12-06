export const currDate = ()=>{
    const today = new Date();
    const day = today.getDate().toString().length<2?`0${today.getDate()}`:today.getDate();
    const month =(today.getMonth() + 1).toString().length<2?`0${( today.getMonth() + 1)}`:( today.getMonth() + 1);
    const year = today.getFullYear();
    const hour =  today.getHours().toString().length<2?`0${today.getHours()}`:today.getHours();
    const minute =  today.getMinutes().toString().length<2?`0${today.getMinutes()}`:today.getMinutes();
    const second =  today.getSeconds().toString().length<2?`0${today.getSeconds()}`:today.getSeconds();
    const date = `${day}.${month}.${year}`;
    const time = `${hour}:${minute}:${second}`;

    return {
        date:date,
        time:time
    }
};