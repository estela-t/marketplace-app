import { useState } from 'react'
import BaseDialog from './BaseDialog'

const CompareDialog = ({ closeCallback }) => {
  const [isOpen, setIsOpen] = useState(true)

  const dialogActions = [
    {
      label: 'Cancel',
      type: 'secondary',
      action: () => {
        setIsOpen(false)
        closeCallback()
      },
    },
  ]

  return (
    <BaseDialog title="Compare products" actions={dialogActions} open={isOpen} setIsOpen={setIsOpen}>
      <p className="mb-4">
        Just a little implementation of a dialog to show how I might go about structuring components, and following design guidelines 🙂
      </p>
    </BaseDialog>
  )
}

export default CompareDialog
