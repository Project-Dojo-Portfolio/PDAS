import PropTypes from 'prop-types';
function ProfileCard({title, handle, image, description}){
    return (
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-1by1'> 
                    <img src={image} alt='pda logo' />
                </figure>
            </div>
            <div className='card-content'>
                <div className='media-content'>
                    <div className='title is-4'>Title is {title}</div>
                    <div className='subtitle is-6'>Handle is {handle}</div>
                    <div className='suptitle is-6'>{description}</div>
                </div>
            </div>
        </div>
    )
}

ProfileCard.propTypes = {
    title: PropTypes.string,
    handle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any
}
export default ProfileCard;