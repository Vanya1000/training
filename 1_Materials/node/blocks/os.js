import os from 'node:os';
import cluster from 'node:cluster';
// Воркеры (workers) - это дочерние процессы, которые запускаются на одном и том же сервере, что и основной процесс.
if (cluster.isMaster) {
	for (let i = 0; i < os.cpus().length - 2; i++) {
		cluster.fork();
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died`);
		cluster.fork();
		console.log('New worker started');
	});
} else {
	console.log(`Воркер с pid=${process.pid} запущен`);
	setInterval(() => {
		console.log(`Воркер с pid=${process.pid} еще работает`);
	}, 5000);
}  
// Маштабирование приложений на Node.js
// 1. Балансировка нагрузки (load balancing)
// 2. Кластеризация (clustering)
// 3. Docker (контейнеризация)