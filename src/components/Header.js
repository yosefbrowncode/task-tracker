import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd , showAdd}) => {

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color={showAdd  ?  '#525452' : '#0f8d9a'} text={showAdd  ?  'Close' : 'Add'} onClick={onAdd}/>
           
           
        </header>
    )
}


Header.defaultProps ={
    title: 'Avodas Hashem',
}

// CSS in line with a Variable Crazy
// const  headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
