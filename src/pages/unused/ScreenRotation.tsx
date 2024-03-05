import { PageTitle } from '../../components/PageTitle'

export const ScreenRotation = () => {
    return (
        <>
            <PageTitle title="Поворот экрана"/>
            
            <div>
                Вы можете изменять ориентацию экрана, даже если экран не поддерживает такую возможность.
            </div>
            <div>
            Горизонтальная 0*
            Веритальная 90*
            Горизонтальная перевёрнутая 180*
            Вертикальная перевёрнутая 270*
            </div>
        </>
    )
}
