import { useNavigate } from 'react-router-dom'
import { BookOpen, ArrowRight } from 'lucide-react'
import { useCountdown } from '../hooks/useCountdown'

const Landing = () => {
  const navigate = useNavigate()
  const timeLeft = useCountdown(5, () => navigate('/login'))

  const handleGoLogin = () => {
    navigate('/login')
  }

  return (
    <section className="landing">
      <div className="landing__inner">
        <div className="landing__logo">
          <BookOpen size={54} />
        </div>
        <h1 className="landing__title">Relatos de papel</h1>
        <p className="landing__tagline">Donde cada pagina cuenta una historia</p>

        <div className="landing__card">
          <div className="landing__countdown">
            Seras redirigido a la pantalla de acceso en
            <span className="landing__countdown-number">{timeLeft}</span>
          </div>
          <button type="button" className="landing__button" onClick={handleGoLogin}>
            Ir a iniciar sesion ahora <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Landing
