import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',  // Ensures it covers the viewport
            }}
        >
            <span className="canvas-loader" /> {/* Custom spinner loader */}
            <p
                style={{
                    fontSize: '14px',
                    color: '#F1F1F1',
                    fontWeight: '800',
                    marginTop: '40px',
                }}
            >
                {progress > 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    );
};

export default CanvasLoader;
