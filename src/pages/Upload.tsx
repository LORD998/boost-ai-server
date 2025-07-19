import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload as UploadIcon, X, CheckCircle, AlertCircle, Play, File, Cloud } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface UploadFile {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  preview?: string;
}

const Upload: React.FC = () => {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (fileList: File[]) => {
    const validFiles = fileList.filter(file => {
      const isVideo = file.type.startsWith('video/');
      const isValidSize = file.size <= 5 * 1024 * 1024 * 1024; // 5GB
      return isVideo && isValidSize;
    });

    const newFiles: UploadFile[] = validFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      progress: 0,
      status: 'uploading',
      preview: URL.createObjectURL(file)
    }));

    setFiles(prev => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach(uploadFile => {
      simulateUpload(uploadFile.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    const interval = setInterval(() => {
      setFiles(prev => prev.map(file => {
        if (file.id === fileId) {
          const newProgress = Math.min(file.progress + Math.random() * 15, 100);
          const newStatus = newProgress === 100 ? 'completed' : 'uploading';
          
          if (newProgress === 100) {
            clearInterval(interval);
          }
          
          return { ...file, progress: newProgress, status: newStatus };
        }
        return file;
      }));
    }, 200);
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-black"
    >
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
              >
                📤 Upload Profissional
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Upload de <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Vídeos</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Sistema cloud-based otimizado para vídeos pesados. Suporte até 5GB por arquivo.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upload Area */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              {/* Dropzone */}
              <motion.div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                whileHover={{ scale: 1.02 }}
                className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
                  isDragOver
                    ? 'border-blue-400 bg-blue-500/10'
                    : 'border-gray-600 bg-gray-800/30 hover:border-gray-500'
                }`}
              >
                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <motion.div
                  animate={{ y: isDragOver ? -10 : 0 }}
                  className="space-y-6"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto">
                    <UploadIcon className="w-12 h-12 text-black" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {isDragOver ? 'Solte seus vídeos aqui' : 'Arraste seus vídeos aqui'}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      ou clique para selecionar arquivos
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <File className="w-4 h-4" />
                      <span>MP4, MOV, AVI, MKV</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Cloud className="w-4 h-4" />
                      <span>Até 5GB por arquivo</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Upload Progress */}
              {files.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 space-y-4"
                >
                  <h3 className="text-xl font-bold mb-4">Uploads em Progresso</h3>
                  
                  {files.map((uploadFile, index) => (
                    <motion.div
                      key={uploadFile.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Preview */}
                        <div className="relative w-16 h-16 bg-gray-700 rounded-xl overflow-hidden flex-shrink-0">
                          {uploadFile.preview && (
                            <video
                              src={uploadFile.preview}
                              className="w-full h-full object-cover"
                              muted
                            />
                          )}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* File Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium truncate">{uploadFile.file.name}</h4>
                            <button
                              onClick={() => removeFile(uploadFile.id)}
                              className="text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                            <span>{formatFileSize(uploadFile.file.size)}</span>
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(uploadFile.status)}
                              <span>
                                {uploadFile.status === 'completed' ? 'Concluído' : 
                                 uploadFile.status === 'error' ? 'Erro' : 
                                 `${Math.round(uploadFile.progress)}%`}
                              </span>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${uploadFile.progress}%` }}
                              className={`h-2 rounded-full transition-colors ${
                                uploadFile.status === 'completed' 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                                  : uploadFile.status === 'error'
                                  ? 'bg-gradient-to-r from-red-500 to-pink-400'
                                  : 'bg-gradient-to-r from-blue-500 to-cyan-400'
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Upload Tips */}
              <ScrollReveal>
                <div className="mt-12 grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold mb-2">Armazenamento Seguro</h3>
                    <p className="text-gray-400 text-sm">Seus vídeos são armazenados com segurança na nuvem</p>
                  </div>
                  
                  <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold mb-2">Compressão Inteligente</h3>
                    <p className="text-gray-400 text-sm">Otimização automática sem perda de qualidade</p>
                  </div>
                  
                  <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Play className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold mb-2">Streaming Global</h3>
                    <p className="text-gray-400 text-sm">Reprodução rápida em qualquer lugar do mundo</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  );
};

export default Upload;