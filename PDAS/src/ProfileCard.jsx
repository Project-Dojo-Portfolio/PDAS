import PropTypes from 'prop-types';
function ProfileCard({title, handle, image}){
    return (
        <div>
            <img src={image} alt='pda logo' />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

ProfileCard.propTypes = {
    title: PropTypes.string,
    handle: PropTypes.string,
    image: PropTypes.any
}
export default ProfileCard;