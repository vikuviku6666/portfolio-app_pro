import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
     
      <section className="contact-page">
        <article className="contact-form">
          <h3>Contact Us</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="fullname"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email address"
                className="form-control"
              />
              <textarea
                name="enter message"
                rows="5"
                placeholder="enter message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit 
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
