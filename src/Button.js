import PropTypes from 'prop-types'

function Button({ 
    children,
    primary,
    secondary, 
    success, 
    warning,
    danger,
    outline,
    rounded
}) {
    return <button className="text-blue-500">{children}</button>; // wrapped element
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
         + Number(!!secondary)
         + Number(!!warning)
         + Number(!!success);
         + Number(!!danger);

         if (count <  1) {
            return new Error('invalid ')
         }
    }
}

export default Button;

