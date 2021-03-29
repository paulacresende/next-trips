import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()

    screen.logTestingPlaygroundURL()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Formiga',
      slug: 'formiga',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Paris',
      slug: 'paris',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/formiga/i)).toBeInTheDocument()
    expect(screen.getByTitle(/paris/i)).toBeInTheDocument()
  })
})
