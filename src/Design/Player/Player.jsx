import video from '../../assets/index';

const Player = () => {
    return (
        <div className='w-full'>
            <video src={video.mufasa} muted controls className="rounded-xl" />
        </div>
    )
}

export default Player