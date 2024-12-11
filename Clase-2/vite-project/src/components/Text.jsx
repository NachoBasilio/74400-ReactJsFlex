import PropTypes from 'prop-types'

const Text = ({className}) => {
    return (
    <div className={className}>
        Esto es un texto
    </div>
    )
}

//PropTypes:

Text.propTypes = {
    className: PropTypes.string
}

export default Text
