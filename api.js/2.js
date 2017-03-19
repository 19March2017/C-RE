(function () {
    // Set some global variables.
    if (!window.___grecaptcha_cfg)
        window.___grecaptcha_cfg = {};
    if (!window.___grecaptcha_cfg.render)
        window.___grecaptcha_cfg.render = 'onload';
    window.__google_recaptcha_client = true;

    // Create the following:
    // <script type="text/javascript" async="true" src="https://www.gstatic.com/recaptcha/api2/r20170315121834/recaptcha__en.js"></script>
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://www.gstatic.com/recaptcha/api2/r20170315121834/recaptcha__en.js';

    // Check for <script nonce="...">
    var elem = document.querySelector('script[nonce]');
    // Contains the nonce if it is set, otherwise it is falsy
    var nonce = elem && (elem.nonce || elem.getAttribute('nonce'));
    if (nonce) {
        // If the nonce is set, set it on the newly-created script tag
        po.setAttribute('nonce', nonce);
    }

    // Put the newly-created script element before the first script in the page
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
}());