package com.app.ecom;

import com.app.ecom.entities.Categoria;
import com.app.ecom.entities.Producto;
import com.app.ecom.repository.CategoriaRepository;
import com.app.ecom.repository.ProductoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class InventarioServiceGraphqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventarioServiceGraphqlApplication.class, args);
	}

//	@Bean
//	CommandLineRunner commandLineRunner(CategoriaRepository categoriaRepository, ProductoRepository productoRepository){
//		Random random = new Random();
//		return args -> {
//			List.of("Computadoras","Impresoras","Smartphones").forEach(cat -> {
//				Categoria categoria = Categoria.builder().nombre(cat).build();
//				categoriaRepository.save(categoria);
//			});
//			categoriaRepository.findAll().forEach(categoria -> {
//				for(int i = 0;i < 10; i++){
//					Producto producto = Producto.builder()
//							.id(UUID.randomUUID().toString())
//							.nombre("Computadora "+i)
//							.precio(100 + Math.random()*50000)
//							.cantidad(random.nextInt(100))
//							.categoria(categoria)
//							.build();
//					productoRepository.save(producto);
//				}
//			});
//		};
//	}
@Bean
CommandLineRunner commandLineRunner(CategoriaRepository categoriaRepository, ProductoRepository productoRepository) {
	return args -> {
		// Insertar categorías
		categoriaRepository.saveAll(List.of(
				new Categoria(1L, "Computadoras"),
				new Categoria(2L, "Impresoras"),
				new Categoria(3L, "Smartphones")
		));

//		// Insertar productos
//		productoRepository.saveAll(List.of(
//				new Producto(111111, 5, "Computadora Chromebook", 1000.00, categoriaRepository.findById(1L).get()),
//				new Producto(111112, 5, "Impresora Samsung", 350.00, categoriaRepository.findById(2L).get()),
//				new Producto(111113, 18, "Smartphone Huawei", 700.00, categoriaRepository.findById(3L).get()),
//				new Producto(111114, 7, "Impresora Ricoh", 380.00, categoriaRepository.findById(2L).get()),
//				new Producto(111115, 6, "Computadora Microsoft Surface", 1800.00, categoriaRepository.findById(1L).get()),
//				new Producto(111116, 20, "Smartphone Xiaomi", 600.00, categoriaRepository.findById(3L).get()),
//				new Producto(111117, 9, "Impresora Brother", 320.00, categoriaRepository.findById(2).get()),
//				new Producto(111118, 3, "Computadora Macbook", 1900.00, categoriaRepository.findById(1).get()),
//				new Producto(111119, 25, "Smartphone Motorola", 500.00, categoriaRepository.findById(3).get()),
//				new Producto(111120, 12, "Smartphone Samsung", 800.00, categoriaRepository.findById(3).get()),
//				new Producto(111121, 7, "Impresora Canon", 280.00, categoriaRepository.findById(2).get()),
//				new Producto(111122, 15, "Smartphone iPhone", 1200.00, categoriaRepository.findById(3).get()),
//				new Producto(111123, 10, "Computadora Alienware", 2200.00, categoriaRepository.findById(1).get()),
//				new Producto(111124, 3, "Impresora Xerox", 450.00, categoriaRepository.findById(2).get()),
//				new Producto(111125, 8, "Computadora Toshiba", 1400.00, categoriaRepository.findById(1).get()),
//				new Producto(111126, 5, "Impresora Lexmark", 400.00, categoriaRepository.findById(2).get()),
//				new Producto(111127, 3, "Computadora Lenovo", 1100.00, categoriaRepository.findById(1).get()),
//				new Producto(111128, 4, "Impresora HP", 300.00, categoriaRepository.findById(2).get()),
//				new Producto(111129, 9, "Impresora Kyocera", 430.00, categoriaRepository.findById(2).get()),
//				new Producto(111130, 2, "Impresora Epson", 250.00, categoriaRepository.findById(2).get()),
//				new Producto(111131, 25, "Smartphone Realme", 550.00, categoriaRepository.findById(3).get()),
//				new Producto(111132, 10, "Computadora Dell", 1700.00, categoriaRepository.findById(1).get()),
//				new Producto(111133, 12, "Impresora Panasonic", 370.00, categoriaRepository.findById(2).get()),
//				new Producto(111134, 20, "Smartphone Oppo", 750.00, categoriaRepository.findById(3).get()),
//				new Producto(111135, 6, "Computadora Asus", 1300.00, categoriaRepository.findById(1).get()),
//				new Producto(111136, 18, "Smartphone Vivo", 650.00, categoriaRepository.findById(3).get()),
//				new Producto(111137, 15, "Smartphone OnePlus", 900.00, categoriaRepository.findById(3).get()),
//				new Producto(111138, 5, "Computadora Acer", 1200.00, categoriaRepository.findById(1).get()),
//				new Producto(111139, 4, "Impresora HP", 300.00, categoriaRepository.findById(2).get())
//		));
	};
}

}
