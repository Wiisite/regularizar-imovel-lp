import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const phoneNumber = '5511943825880'; // Número do WhatsApp
  const defaultMessage = 'Olá! Gostaria de saber mais sobre os serviços jurídicos da PP Advogados.';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const handleQuickMessage = (text: string) => {
    const encodedMessage = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-40 animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#25d366] to-[#20ba5a] text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">PP Advogados</h3>
              <p className="text-sm text-green-100">Geralmente responde em minutos</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Messages */}
          <div className="p-4 space-y-2 border-b border-gray-200">
            <p className="text-sm text-gray-600 font-semibold mb-3">Escolha um assunto:</p>
            <button
              onClick={() => handleQuickMessage('Gostaria de agendar uma consulta sobre Direito Trabalhista.')}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
            >
              📋 Agendar Consulta
            </button>
            <button
              onClick={() => handleQuickMessage('Tenho dúvidas sobre Reforma Trabalhista.')}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
            >
              ❓ Dúvidas Gerais
            </button>
            <button
              onClick={() => handleQuickMessage('Gostaria de conhecer os serviços de Direito Empresarial.')}
              className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 rounded-lg transition-colors"
            >
              💼 Serviços Empresariais
            </button>
          </div>

          {/* Input Area */}
          <div className="p-4 space-y-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#25d366] resize-none"
              rows={3}
            />
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-[#25d366] to-[#20ba5a] text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Enviar via WhatsApp
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 text-center text-xs text-gray-500 rounded-b-2xl">
            Responderemos assim que possível
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#25d366] to-[#20ba5a] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all z-50 flex items-center justify-center group animate-fade-in hover:scale-110"
        title="Enviar mensagem via WhatsApp"
      >
        <div className="absolute inset-0 bg-[#25d366] rounded-full animate-pulse opacity-20"></div>
        <MessageCircle size={28} className="relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Clique para conversar
          <div className="absolute bottom-0 right-4 w-2 h-2 bg-gray-900 transform rotate-45 translate-y-1"></div>
        </div>
      </button>

      {/* Floating Badge */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 bg-[#25d366] text-white px-3 py-2 rounded-full text-xs font-semibold animate-bounce z-40">
          Oi! 👋
        </div>
      )}
    </>
  );
}
