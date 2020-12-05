let token = ''||localStorage.getItem('token');
//添加小贴士
export const upArticle = ()=> {
    let fm = new FormData(document.getElementById('form'));
    console.log(fm);
    fetch('http://211.159.166.29:1234/admin/uploadpassage', {
        method : 'POST',
        mode : 'cors',
        headers: {
            'authorization':token
        },
        body : fm
    }).then(res => {
        if (res.ok) {
            console.log(123);
            //只有请求成功才会返回数据
            return res.text()
        } else {
            throw new Error(`status: ${res.status}`)
        }
        }, err => {

    }).then(d => {
        if (d === undefined || d === '') {
            return
        }
        console.log(d);
    })
    .catch(err => {
        console.log(err)
    })

}

//添加APP
export const addApp = (t)=> {
    console.log(t);
    console.log(t.target);
    console.log(t.target.files);
    if (t.target.files.length === 0) {
        return
    }

    let img = t.target.files[0],
        fm = new FormData()


    console.log(img)
    fm.append('image', img)

    fetch('http://211.159.166.29:1234/admin/uploadapp', {
        method : 'POST',
        mode : 'cors',
        headers: {
            'authorization':token
        },
        body : fm
    }).then(res => {
        if (res.ok) {
            console.log(123);
            //只有请求成功才会返回数据
            return res.text()
        } else {
            throw new Error(`status: ${res.status}`)
        }
        }, err => {

    }).then(d => {
        if (d === undefined || d === '') {
            return
        }
        console.log(d)
    })
    .catch(err => {
        console.log(err)
    })

}

//添加App功能
export const addFun = (t,funName)=> {
    console.log(t,funName);
    var word = prompt("请输入功能");
    var str=t.target.id.split('/')[2];
    console.log(str);
    if (word === '') {
        return
    }
    var data={
        "name":word,
        "appname":str,
        "ename":funName
    }
    console.log(data)
    fetch('http://211.159.166.29:1234/admin/uploadappFunc', {
        method : 'POST',
        mode : 'cors',
        headers: {
            'authorization':token
        },
        body : JSON.stringify(data)
    }).then(res => {
        if (res.ok) {
            console.log(123);
            //只有请求成功才会返回数据
            return res.text()
        } else {
            throw new Error(`status: ${res.status}`)
        }
        }, err => {

    }).then(d => {
        if (d === undefined || d === '') {
            return
        }
        console.log(d)
    })
    .catch(err => {
        console.log(err)
    })

}

//添加功能
export const addStep = (t)=> {
    let fm1 = new FormData(document.getElementById('form'));
    let ptArr=t.target.id.split('/');
    let pt = ptArr[2]+'_'+ptArr[3];
    console.log(pt);
    fm1.append('table',pt);
    fetch('http://211.159.166.29:1234/admin/uploadappStep', {
        method : 'POST',
        mode : 'cors',
        headers: {
            'authorization':token
        },
        body : fm1
    }).then(res => {
        if (res.ok) {
            //只有请求成功才会返回数据
            return res.text()
        } else {
            throw new Error(`status: ${res.status}`)
        }
        }, err => {

    }).then(d => {
        if (d === undefined || d === '') {
            return
        }
        console.log(d)
    })
    .catch(err => {
        console.log(err)
    })

}
