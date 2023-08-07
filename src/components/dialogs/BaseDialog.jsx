import { Dialog } from '@headlessui/react'
import CloseBtn from '../../assets/close-btn.svg'

// note: decided to use the headless ui library for a solid, accessible & quick implementation of a dialog
// building components from scratch is fun, but we don't always have to re-invent the wheel!

const BaseDialog = ({ title, actions, children, open, setIsOpen }) => {
  return (
    <Dialog open={open} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* backdrop overlay */}
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)]" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-10 rounded-lg shadow-main max-w-[800px]">
          <div className="flex justify-between items-start">
            <Dialog.Title className="text-lg mb-4">{title}</Dialog.Title>
            <button onClick={() => setIsOpen(false)}>
              <span className="sr-only">close dialog</span>
              <img alt="" src={CloseBtn} />
            </button>
          </div>

          <div className="text-grey">{children}</div>

          {/* buttons */}
          <div className="flex flex-col gap-2 justify-end md:flex-row">
            {actions &&
              actions.map((action, i) => (
                <button key={i} onClick={action.action} className={`ml-1 ${action.type === 'primary' ? 'primary' : 'secondary'}`}>
                  {action.label}
                </button>
              ))}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default BaseDialog
