const Toast = () => {
    return(
        <div class="toast show" data-autohide="false">
            <div class = "toast-header">
                <strong>header</strong>
                <small>5 mins ago</small>
                <button data-dismiss="toast">&times</button>
            </div>
            <div class="toast-body">
                some text
            </div>

        </div>
        ) 
}

export default Toast