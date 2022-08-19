import { expect } from 'chai'
import { MadError } from './mad-error'

describe(MadError.name, () => {
  const errorMessage = 'This is a test error'
  let madError: MadError

  beforeEach(() => {
    madError = new MadError(errorMessage)
  })

  describe('when creating new MadError', () => {
    it('should set the message', () => {
      expect(madError.message).to.equal(errorMessage)
    })

    it('should set the name', () => {
      expect(madError.name).to.equal('MadError')
    })

    it('should set default status code to 500', () => {
      const { status } = madError.toJSON()
      expect(status).to.equal(500)
    })

    it('should set default code to undefined', () => {
      const { code } = madError.toJSON()
      expect(code).to.equal(undefined)
    })
  })

  describe('when converting to JSON', () => {
    it("should return the error object with it's properties", () => {
      const { name, message, status, code } = madError.toJSON()
      expect(name).to.equal('MadError')
      expect(message).to.equal(errorMessage)
      expect(status).to.equal(500)
      expect(code).to.equal(undefined)
    })
  })

  describe('when setting the status code', () => {
    it('should set the status code', () => {
      const statusCode = 400
      madError.status(statusCode)
      const { status } = madError.toJSON()
      expect(status).to.equal(statusCode)
    })

    it('should return the MadError', () => {
      expect(madError.status(500)).to.be.instanceOf(MadError)
    })
  })

  describe('when setting the error code', () => {
    const errorCode = 'ERROR_CODE'

    it('should set the error code', () => {
      madError.code(errorCode)
      const { code } = madError.toJSON()
      expect(code).to.equal(errorCode)
    })

    it('should return the MadError', () => {
      expect(madError.code(errorCode)).to.be.instanceOf(MadError)
    })
  })
})
