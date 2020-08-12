import React from 'react'

import FyloFeature from './FyloFeature'
import './styles/FyloFeatures.css'
import iconAccessAnywhere from '../images/fylo/icon-access-anywhere.svg'
import iconSecurity from '../images/fylo/icon-security.svg'
import iconCollaboration from '../images/fylo/icon-collaboration.svg'
import iconAnyFile from '../images/fylo/icon-any-file.svg'

function FyloFeatures() {
  return (
    <section className="FyloFeatures">
      <FyloFeature
        image={iconAccessAnywhere}
        imageAlt="Acceso desde cualquier lugar"
        title="Acess your files, anywhere"
        description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
      />
      <FyloFeature
        image={iconSecurity}
        imageAlt="Seguridad de confianza"
        title="Security you can trust"
        description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
      />
      <FyloFeature
        image={iconCollaboration}
        imageAlt="Colaboración en tiempo real"
        title="Real-time collaboration"
        description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />
      <FyloFeature
        image={iconAnyFile}
        imageAlt="Almacena cualquier tipo de archivo"
        title="Store any type of file"
        description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </section>
  )
}

export default FyloFeatures