// import video from '../../../assets/index';

const Player = () => {
    return (
        <div className='w-full'>
            <video src={'src/assets/v1.mp4'} muted controls className="rounded-xl" />
        </div>
    )
}

export default Player